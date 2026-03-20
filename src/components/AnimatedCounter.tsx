import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ end, suffix = "", decimals = 0 }: { end: number; suffix?: string; decimals?: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} suffix={suffix} decimals={decimals} duration={2.2} /> : "0"}
    </span>
  );
}
