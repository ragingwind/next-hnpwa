import Link from "next/link";

export default({type, stories, totalPage = 1, page=1}) => (
  <div>
    <ui>
    {
      stories.map((s, i) => (
        <li key={(s = s || {}) && i}>
          <span className="count">
            {(page - 1) * 30 + i + 1}
          </span>
          <span className="item">
            <div><a href={s.url} target="_black">{s.title}</a></div>
            <div className="info"><Link href={`/user?id=${s.by}`}><a>{s.by}</a></Link></div>
          </span>
        </li>
      ))
    }
    </ui>
    <footer>
    {
      page <= totalPage &&
        <Link href={`${type}?page=${Number(page) + 1}`}><a>More stories</a></Link>
    }
    </footer>
    <style jsx>{`
      li {
        margin: 10px, 0;
        list-style-type: none;
        padding-left: 15px;
        display: flex;
        margin-top: 14px;
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

      .info a {
        color: gray;
        text-decoration: none;
      }

      .info a:hover {
        text-decoration: underline;
      }

      .info {
        font-size: 14px;
      }

      footer {
        padding: 15px
      }

      footer a {
        color: #0e0e0e;
        text-decoration: none;
      }
    `}</style>
  </div>
)

