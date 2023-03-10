import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>

      <h1 className="text-5xl font-bold">Looking for a GitHub Profile?</h1>
      <p className="py-6">With just a few clicks, you can access comprehensive user statistics and take your GitHub experience to the next level.</p>

      <UserSearch />
      <UserResults />
    </>
  )
}
export default Home