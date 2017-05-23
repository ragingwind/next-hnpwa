export default({user}) => (
  <div>
    <h3>{user.id}</h3>
    <ul>
      <li>Created: {user.created}</li>
      <li>Karma: {user.karma}</li>
      <li>Delay: {user.delay}</li>
      <li>About: {user.about}</li>
    </ul>
    <style jsx>{`
      ul {
        padding: 0
      }

      li {
        margin: 10px, 0;
        list-style-type: none;
        padding-left: 10px;
        display: flex;
        margin-top: 5px;
      }
    `}</style>
  </div>
)
