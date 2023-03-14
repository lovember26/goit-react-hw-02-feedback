import { Span } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p>
        Good: <Span>{good}</Span>
      </p>
      <p>
        Neutral: <Span>{neutral}</Span>
      </p>
      <p>
        Bad: <Span>{bad}</Span>
      </p>
      <p>
        Total: <Span>{total}</Span>
      </p>
      <p>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </p>
    </>
  );
}
