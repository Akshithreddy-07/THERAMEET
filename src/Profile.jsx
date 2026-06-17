function Profile({ user }) {
  return (
    <div className="profile-card">
      <h3>My Profile</h3>

<p>
  <strong>Name:</strong> {user?.name}
</p>

<p>
  <strong>Age:</strong> {user?.age}
</p>

<p>
  <strong>Gender:</strong> {user?.gender}
</p>

<p>
  <strong>Height:</strong> {user?.height} cm
</p>

<p>
  <strong>Weight:</strong> {user?.weight} kg
</p>

<p>
  <strong>Blood Group:</strong> {user?.bloodGroup}
</p>

<p>
  <strong>Phone:</strong> {user?.phone}
</p>

<p>
  <strong>Email:</strong> {user?.email}
</p>
    </div>
  );
}

export default Profile;