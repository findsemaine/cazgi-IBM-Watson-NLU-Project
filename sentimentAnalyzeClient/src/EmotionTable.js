import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
                this.props.emotions.map(emotion => {
                    return <tr>
                        <td>
                            {emotion.emotion}
                        </td>
                        <td>
                            {emotion.score}
                        </td>
                    </tr>
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
