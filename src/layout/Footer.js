const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p><strong>Jennimar17@gmail.com</strong></p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeniffer-corona/">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/Jennimar17">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.behance.net/jeniffehurtado">
                      <span className="icon fab fa-behance-square" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
