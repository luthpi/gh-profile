# GitHub Profile

Simple web application to get user data from GitHub.
This app fetches my data by default, however, you can add `user` parameter to the url.

Profile :

https://luthpai-gh.vercel.app/?user=john

Repositories :

https://luthpai-gh.vercel.app/repos/?user=john

Statistics :

https://luthpai-gh.vercel.app/stats/?user=john

## Install

This app is made with React js, and runs on top of Node js, it means you need to install Node js first, you also need to install yarn.

```
// enable yarn
$ corepack enable
// for unix based:
$ sudo corepack enable
```

if none of them work :

`$ npm i -g yarn`

```
// clone this project
$ git clone https://github.com/luthpai/gh-profile && cd gh-profile

// install required dependencies
$ yarn

// run this project
$ yarn dev
```

open `localhost:1234` on your browser.

And then, change every usn props on Route elements on App.tsx
```jsx
<Route path="/" element={<Profile usn="<change this>" />} />
```

## About app

Libraries/Framework used : React (Typescript), Tailwind, Axios, React Router
