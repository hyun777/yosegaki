# 寄せ書きゼネレーター

## https://yosegaki.vercel.app/

---

こんにちは。簡単な寄せ書きが出来るウェブページです。  
使った技術は nextJS です。  
DBMS は mongoDB を atlas の free tier で使っていて、反応がちょっと遅いです。  
API の方は nextJS の API をそのまま使いました。  
component の作り方は atomic design pattern を自分なりに勉強して真似してみましたが
だんだんこれじゃない気がしてまして、、これからまた 1 から勉強する予定です。  
ありがとうございます。

---

## 主な機能

- 簡単に寄せ書きが出来る専用のページが作れます。
- ページの共有は URL だけじゃなく QR コードを利用することも出来ます。
- 削除は管理用パスワードを入力して出来ます。
- 締め切る機能でページを作る時入力したメールアドレスの方に PNG が送られてページは削除されます。

**#締め切りのメール送信が gmail api を使っていますが、refresh token の有効期限が 1 週間なので、期限が切れると送信できない場合があります。**
