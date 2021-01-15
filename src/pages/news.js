import React, {Component} from 'react'
import NewsArticle from '../assets/components/news-article'
import newsArray from '../assets/data/news-data'


class News extends Component {

    render() {
        return(
            <div className="news-page-container">
                <h2 className="news-title">OUR <span>NEWS</span></h2>
                <p className="news-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolor quasi quod nam ut nesciunt esse fugit dolore ex aperiam! <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi mollitia veniam, blanditiis magni dolorum asperiores fugiat cupiditate reprehenderit fugit repudiandae cumque qui. Aperiam ea, voluptatum facilis cum at non, voluptas sapiente, quasi reiciendis incidunt dolore eius voluptatibus officia voluptatem?</p>

                <div className="news-articles-container">
                    <NewsArticle input={newsArray[1]}/>
                    <NewsArticle input={newsArray[0]}/>
                </div>

            </div>
        )
    }
}

export default News