import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion"

function UserItem({ user: { login, avatar_url } }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <div className="card shadow-md compact side bg-base-100">
          <div className="flex-row items-center space-x-4 card-body">
            <div>
              <div className="avatar">
                <div className="rounded shadow w-14 h-14">
                  <img src={avatar_url} alt="Profile Avatar" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="card-title">{login}</h2>
              <Link className='link link-hover' to={`/user/${login}`}>
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem