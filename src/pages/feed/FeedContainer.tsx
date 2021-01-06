import React, { useEffect, useRef, useState } from "react";
import FeedPresetner from "./FeedPresetner";

const FeedContainer = () => {
  //css

  const scrollEl = useRef(null);
  const [count, setCount] = useState<number>(12);
  const [loading, setLoading] = useState(false);

  const handleTimer = () => {
    setTimeout(() => {
      setCount(count + 4);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight }: any = scrollEl.current;

    if (scrollTop + clientHeight >= scrollHeight) {
      setLoading(true);
      handleTimer();
    }
  };

  useEffect(() => {
    const ref = scrollEl.current;
    ref.addEventListener("scroll", handleScroll);
    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <FeedPresetner
      scrollEl={scrollEl}
      handleScroll={handleScroll}
      count={count}
      loading={loading}
    />
  );
};

export default FeedContainer;
