import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";

export default function FacebookHome({ match }: any) {
  const [facebookLabels, setFacebookLabels] = React.useState([
    "Dashboard",
    "Profile",
    "settings",
  ]);
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }

  console.log(match);
  return (
    <>
      <div>
        <div>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`${match.url}/profile`}
              >
                Profile
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                style={{ textDecoration: "none" }}
                to={`${match.url}/settings`}
              >
                settings
              </Link>
            </li>
          </ul>
        </div>
        {users.map((u: any) => (
          <p>
            <Link to={`${match.path}/${u.name}`}>{u.name}</Link>
          </p>
        ))}
        <div>
          <Switch>
            <Route path={`${match.path}/profile`} component={Profile} />
            <Route path={`${match.path}/settings`} component={Settings} />
            <Route path={`${match.path}/:username`} component={User} />
          </Switch>
        </div>
      </div>
    </>
  );
}

function Profile({ match }: any) {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${match.url}/profile1`}>Profile one</Link>
        </li>
        <li>
          <Link to={`${match.url}/profile2`}>Profile two</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/profile1`} component={ProfileOne} />
        <Route path={`${match.path}/profile2`} component={ProfileTwo} />
        <Route />
      </Switch>
    </div>
  );
}

const ProfileOne = () => <div> Profile One</div>;
const ProfileTwo = () => <div>Profile Two</div>;

function Settings() {
  return <div>Settings Page</div>;
}

function User({ match }: any) {
  let { topicId }: any = useParams();
  console.log(match);
  return <div>{match.params.username}</div>;
}
