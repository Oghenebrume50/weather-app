const error = () => `<span>
    <img src="../dist/assets/img/11.png" alt="error">
  </span>`;

const errorMessage = () => `<span class="not-found">City not found${error()}</span>`;

export { error, errorMessage };
