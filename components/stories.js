import Link from "next/link";
export default({stories, page=1}) => (
  <ui>
    {
	  	stories.map((s, i) => (
        <li key={s.id}>
          <span className="count">
            {(page - 1) * 30 + i}
          </span>
          <span className="item">
            <div><a href={s.url} target="_black">{s.title}</a></div>
            <div className="info">{s.by}</div>
          </span>
        </li>
      ))
    }
    <style jsx>{`
      li {
        margin: 10px, 0;
        list-style-type: none;
        padding: 5px;
        display: flex;
        margin-top: 12px;
      }
			
			.count {
        flex-basis: auto;
        vertical-align: top;
        font-size: 18px;
        width: 20px;
        padding-right: 15px;
      }

      .item {
        flex-grow: 100;
        text-align: left;
        font-size: 18px;
      }

      .item a {
        color: #0e0e0e;
        text-decoration: none;
      }

      .item a:hover {
        color: #0e0e0e;
        text-decoration: underline;
      }

      .info {
        font-size: 14px;
        color: grey;
      }
    `}</style>
  </ui>
)

