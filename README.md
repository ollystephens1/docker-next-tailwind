# Next.js + Tailwind CSS + Docker

This is an example of how you can use Tailwind CSS in a Next.js using Docker for development.

It is based on the [Next.js and Tailwind Css](https://github.com/joecohens/next-with-tailwindcss).

## How to use

Download the example [or clone the repo](https://github.com/joecohens/next-with-tailwindcss):

```bash
cd next-with-tailwindcss
```

To get this example running you just need to

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) add your own clases to `styles/index.scss`.

## Running with Docker

Build the image based on the Dockerfile provided by the repo.

```bash
docker build --rm --tag next-tailwindcss:latest
docker run -it --name next-tailwind -p 3000:3000 -v ${PWD}/:/app/ next-tailwind:latest
```

![example](screenshot.png)
