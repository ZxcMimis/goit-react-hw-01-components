

export const Statistics = ({ title, status }) => {
  return (
    <section >
      <h2>{title}</h2>

      <ul >
        {status.map((info) => (
          <li key={info.id}>
            <span >{info.label}</span>
            <span >{info.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};