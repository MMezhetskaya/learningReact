import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const tempData = [{
  title: "#1 Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
  title: "#2 Finibus Bonorum et Malorum",
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
}, {
  title: "#3 At vero eos et accusamus et iusto odio",
  description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "
}];

const Block = ({ id, title, description, className, onClick }) => {
  return (
    <div className="container">
      <h2 id={id} onClick={onClick}>{title}</h2>
      <div className={`description ${className}`}>{description}</div>
    </div>
  )
}

class App extends React.Component {
  state = {
    visible: null
  }
  
  handleVisibility(event) {
    let currentId = (event.target.id !== this.state.visible) ? event.target.id : null;

    this.setState({
      visible: currentId
    });
  }

  render() {
    return (
      <div className="main">
        <h1>FAQ</h1>
        {
          tempData.map((item, i) => 
            <Block
              key={i}
              id={i}
              title={item.title}
              description={item.description}
              onClick={this.handleVisibility.bind(this)}
              className={(this.state.visible === i.toString()) ? "visible" : "hidden"}
            />
          )
        }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
