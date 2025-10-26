// import React from 'react'

function UserProfileCard() {
    const userInfo = {name: "Shiva", age: 21, image: "https://i.pinimg.com/736x/0c/e4/64/0ce4644b519c77ac82c5656f1828c9d5.jpg", email: "shivatripathi@.com"}
  return (
    <div>
        <img src="" alt="userImage" />
        <div>
            <h5>Shiva Tripathi</h5>
            <p>I'm Full-stack developer !!</p>
            <div>
                <p>Age: {}</p>
                <p>Email: {}</p>
            </div>
        </div>
    </div>
  )
}

export default UserProfileCard