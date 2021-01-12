<h1 align="center", font-size:10px> Pequeno Guia do Expo 🚀</h4>

Expo é uma ferramenta utilizada para o React Native.

* Expo Documentação - https://docs.expo.io/

* Expo Dev - https://expo.io/

* Expo na Apple Store - https://apps.apple.com/br/app/expo-client/id982107779

* Expo na Google Play - https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US

# Etapas para testar o app
para testar sem precisar buildar um apk, apenas baixe o app Expo que está presente pra Android e iOS. com o app baixado, note que, ao realizar o ``npm start`` (debugando o app), irá abrir uma página no seu navegador e junto um QR Code. 

* no iphone, abra a câmera e foque no QR Code para ver o resultado.

* no android, abra o app e clique no ícone do QR Code e foque no QR Code da página do seu navegador.
  

## 1. Instalando o CLI (padrão react)
```
npm install --global expo-cli
```

## 2. Debugando
```
npm start
```

# ANTES DE BUIDAR O .apk/.ipa!

para poder buildar .apk ou .ipa, é necessário obter uma conta no [Expo](https://expo.io/).

## 3. Buildando o .apk (Android)
```
expo build:android -t apk
```

## 3.1. Rodando o .apk direto no celular (necessário estar plugado no USB)
```
adb install app-filename.apk
```

## 4. Rodando a build no Apple TestFlight (iOS)
```
build ios
```
logo, digite a sua Apple ID e sua senha [**(conta de desenvolvedor)**](https://developer.apple.com/). A conta de dev serve para gerar o arquivo .ipa (tipo o .apk só que para iOS).

ao fazer login, o Expo fará a seguinte pergunta:

***How would you like to upload your credentials?***

bom, na hora de publicar *apps* iOS, o processo é super chato e demorado, pois é preciso criar várias condições, licenças, perfis de provicionamento, criar o *app* dentro do iTunes Connect para testar, certificados, enfim, muita coisa :sweat_smile:

porém, o Expo consegue fazer TUDO sozinho, ou seja, menos dor de cabeça.

portanto, selecione a opção:

```
Expo handles all credentials, you can still provide overrides
```


***Will you provide your own Apple Distribution Certificate?***

```
Let Expo handle the process
```


***Would you like to reuse Apple Distribution Certificate from another app?***

```
No, please create a new one
```


***Will you provide your own Apple Push Notifications service key?***

```
Let Expo handle the process
```


***Would you like to reuse Apple Push Notifications service key from another app?***

```
No, please create a new one
```

agora precisamos testar o *app*. Para isso, é necessário utilizar o [**TestFlight**](https://developer.apple.com/testflight/). O [**TestFlight**](https://developer.apple.com/testflight/) serve para você testar os *apps* para iOS.

> devido as constantes atualizações no site da Apple, poderá acontecer em que, as próximas etapas não sejam iguais as atuais páginas.

> o Diego do canal da Rocketseat explica melhor essa parte! [**Link do vídeo**](https://youtu.be/wYMvzbfBdYI?t=1213).

* acesse o [**Apple Developer Program**](https://developer.apple.com/account);

* faça o login da sua Apple ID;

* clique em App Store Connect;

* meus apps;

* no canto superior esquerdo da tela, localize um ícone com sinal de :heavy_plus_sign:;

* pronto, agora é só cadastrar o app!
