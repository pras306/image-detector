# Face Detector

![Facedetector](src/assets/images/face_detector.png)

---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [API References](#api-references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

This is a web application that detects faces in the uploaded images, also provides a list of closest celebrity matches for the image.

#### Technologies

- React JS

[Back To The Top](#face-detector)

---

## How To Use

The website is published at [Face Detector](http://pras306.github.io/image-detector/)

Clone the project 

```bash
  git clone https://github.com/pras306/image-detector.git
```

Go to the project directory

```bash
  cd image-detector
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

---

## API References

- [Clarifai API](https://www.clarifai.com/)
- [Custom Proxy Server for hiding API key](https://backend-portfolio-proxy.herokuapp.com)

#### Get images

```http
  POST /api/v1/images/detect
```

|Request Body | Type     | Description                                       |
| :---------- | :------- | :------------------------------------------------ |
| `term`      | `string` | **Required**. the URL of image to detect          |



[Back To The Top](#face-detector)

---

## License

MIT License

Copyright (c) [2021] [Prasanna Sriram]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#face-detector)

---

## Author Info

- Github - [pras306](https://github.com/pras306)
- LinkedIn - [Prasanna Sriram](https://www.linkedin.com/in/prasanna-sriram/)

[Back To The Top](#face-detector)