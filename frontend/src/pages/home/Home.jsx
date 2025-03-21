import MessageContainer from "../../components/messageContainer/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-1 border-green-800" >
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home