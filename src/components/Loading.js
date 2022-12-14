import '../styles/Loading.scss';

function Loading({ isLoading }) {
  return isLoading ? <span className="loading" /> : null;
}

export default Loading;
