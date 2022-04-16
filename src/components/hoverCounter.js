// import WithCounter from "./HOC/withCounter";

const hoverCounter = (props) => {
    const { count, incrementCount } = props;
    return (
      <div>
          <h2 onMouseOver={incrementCount}>Item clicked {count} times</h2>
      </div>
    )
}

// export default WithCounter(hoverCounter);
export default hoverCounter;