// httpモジュールの読み込み
const http = require('http');

// HTTPサーバーの作成
const server = http.createServer((request, response) => {
  // HTTPレスポンスのステータス行とメッセージヘッダの指定
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });

  // HTTPレスポンスのメッセージボディの指定
  const responseMessage = '<h1>Hello, World!</h1>';
  response.write(responseMessage);
  response.end();
});

// HTTPサーバーを待機状態にする
const port = 9000;
server.listen(port);
