import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return(
  <div style={{height: "100vh" }}>
        <PrettyChatWindow
            projectId="ea6bdafa-e39c-4af4-a06c-0a794a0e2637"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: "100%" }}
        />
    </div>
    )
}

export default ChatsPage;
