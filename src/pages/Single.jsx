import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            {/* links to editing post number */}
            <Link to={`/write/?edit=2`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus
          bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque
          porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit.
        </h1>
        <p>
          Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus
          bonorum et malorum av Cicero. Opprinnelig begynte avsnittet: Neque
          porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}
