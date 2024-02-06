const Notification = ({ message, success }) => {
    if (message === null) {
      return null
    }
    const className = success ? 'success' : 'error' 
    return (
      <div className={className}>
        {message}
      </div>
    )
  }

export default Notification