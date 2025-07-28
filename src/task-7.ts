function getMessage(ms: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, ms);
  });
}

getMessage(1000).then((result) => console.log(result));
