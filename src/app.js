
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error("onError");
      console.error(err.message);
    },
  },
};
