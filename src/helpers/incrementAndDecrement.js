export const plusMinusHandler = (type, setThis) => {
  let result;
  switch (type) {
    case 'plus':
      result =
        setThis.state.step + setThis.state.value > setThis.state.max
          ? setThis.state.value
          : setThis.state.step + setThis.state.value;
      localStorage.setItem('value', !isNaN(result) ? result : 0);
      setThis.setState({ value: !isNaN(result) ? result : 0 });
      break;

    case 'minus':
      result =
        setThis.state.value - setThis.state.step < setThis.state.min
          ? setThis.state.value
          : setThis.state.value - setThis.state.step;
      localStorage.setItem('value', !isNaN(result) ? result : 0);
      setThis.setState({ value: !isNaN(result) ? result : 0 });
      break;
  }
};
