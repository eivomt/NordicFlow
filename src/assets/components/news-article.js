import React, {Component} from 'react'


class NewsArticle extends Component {

    render() {

        let text = []
        for (let x in this.props.input.text) {
            text.push(this.props.input.text[x])
            text.push(<br key={x + '1'}/>)
            text.push(<br key={x + '2'}/>)
        }

        return (
            <div className="news-article-container">
                <h3>{this.props.input.title.toUpperCase()}</h3>
                <p className="article-date">{this.props.input.date}</p>
                <p className="article-subtitle">{this.props.input.subtitle}</p>
                <div className="article-img-container">
                    <img src={this.props.input.img} alt="a pump"/>
                </div>
                <p className="article-content">
                    {text}
                </p>
                <p className="article-author">{this.props.input.author} <span>{'- ' + this.props.input.authorPosition}</span></p>
            </div>
        )
    }
}

export default NewsArticle