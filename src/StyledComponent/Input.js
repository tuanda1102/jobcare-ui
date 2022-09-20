const { default: styled } = require('styled-components');

export const Input = styled.input`
  background-color: transparent;
  border: none;
  display: block;
  flex: 1 1;
  font-size: 1.4rem;
  outline: none;
  padding: 12px 20px;
  width: 100%;
`;

export function InputAccounts(props) {
  return (
    <div
      style={{
        background: 'rgba(22,24,35,.06)',
        border: '1px solid rgba(22,24,35,.06)',
        borderRadius: '44px',
        display: 'flex',
        height: '44px',
        overflow: 'hidden',
        width: '100%',
        marginBottom: '10px',
      }}
    >
      <Input {...props} />
    </div>
  );
}
