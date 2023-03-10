import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center p-10 bg-neutral">
      <div>
        <span className="footer-title">Follow My Socials!</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/dagbay/" target='_blank' rel='noreferrer'>
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/znivyy/" target='_blank' rel='noreferrer'>
            <AiFillInstagram size={30} />
          </a>
          <a href="https://github.com/dagbay" target='_blank' rel='noreferrer'>
            <AiFillGithub size={30} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}
export default Footer