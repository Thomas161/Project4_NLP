# Project4_NLP

![MeaningCloud](https://www.meaningcloud.com/wp-content/uploads/2015/09/LogoMeaningCloud650x264.png)

A js project built using webpack, express, and the meaningcloud API that allows for user to search a url and evaluates the blogs written within based on subjectivity, confidence and irony.

### Dev Build Script

```python
npm run build-dev
```

### Express Server

```python
npm run start
```

### Jest

```python
npm run test
```

### Production Build

```python
npm run build-prod
```

## Issues
**terser-webpack plugin**  was omitted and not included in production build as it threw an error in production build, this article helped solve the problem
https://medium.com/@omril321/fixing-overly-aggressive-optimization-with-terser-f07309761b50
