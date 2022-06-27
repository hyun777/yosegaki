import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/modules';
import { togglePostModalGen } from '../store/modules/postPage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import T_Post from '../Components/Templates/T_Post';
import M_LoadingCircle from '../Components/Molecules/M_LoadingCircle';
import M_QRcode from '../Components/Molecules/M_QRcode';
import Head from 'next/head';
import {
  updateData,
  changeNameInput,
  changeMessageInput,
  initializeState,
  toggleQRcodeGen,
  Props_postPage,
  CHANGE_MODE,
} from '../store/modules/postPage';
import { toggleGlobalLoading } from '../store/modules/common';
import axios from 'axios';
import html2canvas from 'html2canvas';

const PostPage: NextPage = ({ data }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  let { mode, modalName, modalMessage, toggleQRcode } = useSelector(
    (state: RootState) => {
      return state.postPage;
    }
  );

  const { globalLoading } = useSelector((state: RootState) => state.common);
  const bodyRef = useRef(null);

  const openPostModalWindow = () => {
    dispatch(togglePostModalGen(true));
  };

  const closePostModalWindow = () => {
    dispatch(togglePostModalGen(false));
  };

  const toggleQRcodeHandler = () => {
    if (toggleQRcode) {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
    dispatch(toggleQRcodeGen(!toggleQRcode));
  };

  const inputHandler =
    (actionGenerator: typeof changeNameInput | typeof changeMessageInput) =>
    (value: string) => {
      dispatch(actionGenerator(value));
    };

  async function submitPost() {
    if (!modalName || !modalMessage) return alert('全部入力してください。');
    axios
      .patch(`/api/post/${id}`, {
        name: modalName,
        message: modalMessage,
        date: new Date(),
      })
      .then((res) => {
        const fetchedData = res.data;
        data.comments.push(
          fetchedData.data.comments[fetchedData.data.comments.length - 1]
        );

        dispatch(initializeState());
        dispatch(togglePostModalGen(false));

        window.scrollTo(0, document.body.scrollHeight);
      })
      .catch(() => {
        alert('作成に失敗しました。');
      });
  }

  const initializeStateHandler = () => {
    dispatch(initializeState());
  };

  async function makePNG() {
    try {
      const inputValue = prompt('管理用パスワードを入力してください');

      // When prompt window is canceled
      if (inputValue === null) return;

      const { data: passwordResData } = await axios.get(
        `/api/password/${data._id}`
      );
      const { password } = passwordResData.payload;

      if (password !== inputValue) return alert('パスワードが一致していません');

      const confirmResult = confirm(
        `${data.addresseeEmail}の方にメールを発送、ページを削除しますか`
      );

      if (!confirmResult) return;

      dispatch(toggleGlobalLoading(true));

      if (bodyRef.current !== null) {
        const body = bodyRef.current;

        const canvas = await html2canvas(body);

        const image = canvas.toDataURL('image/png');
        const bufferString = image.replace(/^data:image\/png\;base64,/, '');
        const buf = Buffer.from(bufferString, 'base64');

        const response = await axios.post('/api/email', {
          _id: data._id,
          addressee: data.addressee,
          addresseeEmail: data.addresseeEmail,
          image: buf,
        });

        dispatch(toggleGlobalLoading(false));

        const { data: responseData } = response;

        if (
          responseData.success === false &&
          responseData.desc === 'mailFailure'
        )
          return alert('メール送信に失敗しました。');

        alert('メール発送に成功しました、メイン画面に戻ります。');
        router.push('/');
      }
    } catch (error) {
      dispatch(toggleGlobalLoading(false));
      alert('メール送信に失敗しました。');
    }
  }

  async function toggleMode() {
    try {
      if (mode === 'edit') {
        dispatch(CHANGE_MODE('view'));
        mode = 'view';
        return;
      }

      // Check Password
      const inputValue = prompt('管理用パスワードを入力してください');

      // When prompt window is canceled
      if (inputValue === null) return;

      const { data: passwordResData } = await axios.get(
        `/api/password/${data._id}`
      );
      const { password } = passwordResData.payload;

      if (password !== inputValue) return alert('パスワードが一致していません');

      dispatch(CHANGE_MODE('edit'));
      mode = 'edit';
    } catch (error) {}
  }

  async function deletePost(id: string) {
    try {
      const confirmAnswer = confirm('削除しますか？');
      if (!confirmAnswer) return;

      const { data: newData } = await axios.delete(`/api/post/${data._id}`, {
        data: { commentId: id },
      });

      if (!newData.success) return alert('削除に失敗しました。');

      const filteredData = data.comments.filter((item: any) => {
        if (item._id === id) return false;

        return true;
      });

      data.comments = filteredData;

      dispatch(CHANGE_MODE('edit'));
      mode = 'edit';
    } catch (error) {}
  }

  return (
    <div>
      <Head>
        <title>{data.addressee.replace(/[\s]+/g, '')}様の寄せ書きページ</title>
        <meta name='viewport' content='initial-scale=1, maximum-scale=1'></meta>

        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <T_Post
        Props_A_H1={{
          text: `${data.addressee} 様への寄せ書きを書いてください！`,
        }}
        Props_M_PostMenu={{
          Props_A_Button_1: {
            value: 'QRコード',
            onClick: toggleQRcodeHandler,
            disabled: mode === 'view' ? false : true,
          },
          Props_A_Button_2: {
            value: mode === 'view' ? '削除' : '確認',
            onClick: toggleMode,
          },
          Props_A_Button_3: {
            value: '締め切る',
            onClick: makePNG,
            disabled: mode === 'view' ? false : true,
          },
        }}
        Props_A_Button={{
          type: 'button',
          value: 'CLICK ME!',
          onClick: openPostModalWindow,
          disabled: mode === 'view' ? false : true,
        }}
        Props_O_PostMain={{
          data: data.comments ? data.comments : [],
          onClick: deletePost,
        }}
        // modal
        Props_O_PostModal={{
          Props_O_PostForm: {
            Props_M_LabeledInput_1: {
              Props_A_label: { htmlFor: 'name', text: '名前' },
              Props_A_Input: {
                type: 'text',
                id: 'name',
                onChangeHandler: inputHandler(changeNameInput),
                value: modalName,
              },
            },
            Props_M_LabeledTextarea: {
              Props_A_label: { htmlFor: 'message', text: 'メッセージ' },
              Props_A_Textarea: {
                id: 'message',
                onChangeHandler: inputHandler(changeMessageInput),
                value: modalMessage,
              },
            },
            Props_A_Button: {
              type: 'submit',
              value: '作成',
            },
            submitHandler: submitPost,
          },
          Props_A_Div: {
            onClick: closePostModalWindow,
          },
          closeModal: closePostModalWindow,
          initializeStateHandler: initializeStateHandler,
        }}
        ref={bodyRef}
      />
      {globalLoading ? <M_LoadingCircle /> : ''}
      {toggleQRcode ? <M_QRcode onClick={toggleQRcodeHandler} /> : ''}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.params.id;

  const { data } = await axios.get(
    `https://yosegaki.vercel.app/api/post/${id}`
  );

  if (!data.success)
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };

  return {
    props: { data: { ...data.result, password: '' } },
  };
}

export default PostPage;
