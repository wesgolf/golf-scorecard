import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Navbar from "../components/unauthorized components/navbar"
import "../Styles/blog.css"
import Footer from "./footer"

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(-1)

    const posts = [
        {
            category: "Strokes Gained",
            title: "Understanding Strokes Gained: A Game-Changing Metric in Golf",
            content: "When it comes to analyzing a golfer's performance, there's a metric that has been revolutionizing the way we understand the game: strokes gained. Developed by statistician Mark Broadie, strokes gained provides golfers and analysts with a comprehensive and precise measure of a player's performance relative to the field. In this blog post, we'll explore the concept of strokes gained and how it is calculated, as well as its significance in evaluating golfers' skills. Strokes gained is based on the idea that not all shots in golf are created equal. By tracking the location of every shot hit by professional golfers and comparing their outcomes to historical data, Broadie was able to assign a value to each shot relative to the average number of strokes taken from that position. This value represents the 'gain' or 'loss' in strokes compared to the average player. To calculate strokes gained, a golfer's performance on each shot is compared to the expected outcome based on historical data. For example, if a golfer hits a shot from a certain position and the average number of strokes to hole out from that position is 2.8, but the golfer takes only 2 strokes, they would gain 0.8 strokes on that shot. This process is repeated for every shot throughout the round, and the cumulative strokes gained (or lost) are tallied to determine the player's overall performance. Strokes gained provides a more comprehensive picture of a golfer's skills than traditional statistics like fairways hit or greens in regulation. It takes into account the difficulty of each shot and provides a clearer understanding of a player's strengths and weaknesses. For example, a golfer who consistently gains strokes on approach shots is likely to have strong iron play, while a player who struggles off the tee may lose strokes in the driving category. The introduction of strokes gained has transformed the way players and coaches analyze performance. It allows golfers to focus on specific areas of their game that need improvement, rather than relying on overall scoring averages. By pinpointing strengths and weaknesses, players can develop targeted practice routines to enhance their performance on the course. In conclusion, strokes gained is a game-changing metric in golf that provides a more accurate assessment of a player's performance. By considering the value of each shot relative to the field, it offers a comprehensive view of a golfer's strengths and weaknesses. As this metric continues to gain prominence, we can expect a deeper understanding of the game and further improvement in player development strategies.",
            overview: "The first blog post delves into the concept of strokes gained in golf, its calculation, and its significance in evaluating players' skills, offering a comprehensive understanding of a golfer's performance relative to the field.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/64877ac9dea81d4ff441b0d3_DALL%C2%B7E%202023-06-12%2016.04%201.png",
            readTime: "7 min",
            dateAdded: "2023-06-15",
            author: "Wesley Robertson"
        },
        {
            category: "Golf Statistics",
            title: "Mastering the Art of Scrambling: A Key Golf Statistic for Success",
            content: "When it comes to achieving success on the golf course, one key statistic that stands out is scrambling. Scrambling measures a player's ability to recover and save par or better after missing a green in regulation. In this blog post, we'll explore the concept of scrambling, its calculation, and its significance in evaluating a golfer's short game prowess and overall performance. Scrambling is a valuable skill in golf, as it reflects a player's ability to navigate challenging situations and turn potential bogeys into par or even birdie opportunities. It is calculated by dividing the number of successful up-and-downs (getting up and down from around the green in two strokes or less) by the total number of times a player misses the green in regulation. For instance, if a golfer successfully gets up and down 6 times out of 10 missed greens, their scrambling percentage would be 60%. A high scrambling percentage indicates a player's proficiency in executing delicate pitch shots, precise chip shots, and clutch putts. It showcases their creativity, touch, and composure under pressure. Moreover, strong scrambling skills can compensate for weaknesses in other aspects of the game, such as accuracy off the tee or approach shots. A player with exceptional scrambling abilities can minimize the damage caused by errant shots and maintain momentum on the scorecard. To improve scrambling, golfers should focus on honing their short game skills, including practicing various shots around the green, developing a versatile repertoire of pitches and chips, and refining their putting stroke. Additionally, strategical decision-making and course management play a crucial role in maximizing scrambling opportunities. Knowing when to play conservative shots and when to take calculated risks can greatly impact a player's ability to salvage pars and keep their scores low. In conclusion, scrambling is a vital statistic in golf that showcases a player's ability to recover from challenging situations and save strokes. It highlights the importance of a strong short game, precise shot execution, and mental resilience. By mastering the art of scrambling, golfers can enhance their overall performance and elevate their chances of success on the course.",
            overview: "The second blog post explores the concept of scrambling in golf, its calculation, and its significance in evaluating a player's short game prowess and overall performance, emphasizing the importance of recovering and saving par or better after missing a green in regulation.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/62f12dcdbf33030393bb804a_annie-spratt-QckxruozjRg-unsplash%20(1).jpg",
            readTime: "5 min",
            dateAdded: "2023-06-16",
            author: "Wesley Robertson"
        },
        {
            category: "CourseIQ",
            title: "Unlocking Your Golf Potential: How CourseIQ Benefits Amateur Golfers",
            content: "For amateur golfers looking to improve their game, a strokes gained app can be a game-changer. By harnessing the power of technology and data analysis, these apps provide valuable insights and performance metrics that can help golfers identify areas for improvement and optimize their practice routines. In this blog post, we'll explore the benefits of using a strokes gained app and how it can revolutionize the way amateur golfers approach their game. A strokes gained app offers amateur golfers a wealth of information about their performance on the course. It calculates strokes gained statistics for different aspects of the game, such as driving, approach shots, chipping, and putting. By analyzing the data, golfers can identify their strengths and weaknesses with precision. This knowledge enables them to focus their practice efforts on the areas that will yield the most significant improvement. The app also provides comparisons to average performance data, allowing golfers to gauge how their skills stack up against their peers. This benchmarking aspect provides motivation and goals for improvement. Moreover, a strokes gained app can act as a virtual coach, offering personalized recommendations based on the golfer's data. It can suggest specific drills and exercises to target identified weaknesses and provide practice routines designed to enhance performance in those areas. This tailored guidance helps golfers optimize their training time and make every practice session more effective. Another advantage of a strokes gained app is the ability to track progress over time. By consistently recording data and analyzing trends, golfers can monitor their improvement and identify patterns in their performance. This tracking feature adds a layer of accountability and allows golfers to celebrate milestones and accomplishments along their journey. Additionally, a strokes gained app can assist in course management and strategy. By providing insights into optimal shot selection and decision-making based on historical data, golfers can make more informed choices on the course, leading to better scores and increased confidence. Finally, a strokes gained app can enhance the overall enjoyment of the game. By gaining a deeper understanding of their performance and witnessing tangible progress, amateur golfers can experience a sense of fulfillment and satisfaction in their pursuit of improvement. In conclusion, a strokes gained app is a valuable tool for amateur golfers looking to take their game to the next level. With its data-driven insights, personalized recommendations, progress tracking, and course management assistance, these apps provide a comprehensive and transformative approach to golf improvement. By leveraging the power of technology, amateur golfers can unlock their true potential and enjoy the journey of becoming a better player.",
            overview: "Discover how a strokes gained app can enhance the performance of amateur golfers, offering valuable insights, personalized recommendations, and progress tracking to optimize practice and improve overall gameplay.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/6465528fdceb70062ee775cd_DALL%C2%B7E%202023-05-17%2018.15%201%20(1).png",
            readTime: "8 min",
            dateAdded: "2023-06-17",
            author: "Sarah Thompson"
        },
        {
            category: "PGA TOUR",
            title: "The Importance of Hitting Fairways: A Key Statistic on the PGA TOUR",
            content: "In the high-stakes world of professional golf, where every shot counts, hitting fairways consistently is a crucial skill that can make or break a player's performance. On the PGA TOUR, where the best golfers in the world compete, fairways hit is a statistic that holds significant importance. In this blog post, we will delve into the significance of hitting fairways and how it affects a player's success on the PGA TOUR.\n\nHitting fairways refers to the act of landing the ball in the narrow strip of mowed grass known as the fairway, which runs between the tee box and the putting green. The fairway provides an ideal surface for golfers to hit their approach shots from, as the ball sits up nicely, allowing for better control and a higher chance of executing precise shots.\n\nOne of the primary reasons hitting fairways is crucial is the impact it has on the golfer's ability to attack the green. When a player finds the fairway off the tee, they gain a significant advantage over their competitors who miss the fairway. This advantage comes in the form of an improved angle to approach the green, as well as better visibility of the target. By hitting fairways, golfers can avoid obstacles such as trees, bunkers, or rough, which can hinder their shot-making abilities and increase the difficulty of recovering from errant tee shots.\n\nHitting fairways also plays a vital role in setting up favorable approach shots. When a player is in the fairway, they have more options in terms of shot selection. They can attack the pin directly, aim for specific areas of the green, or even play more conservatively if the situation calls for it. This flexibility allows golfers to optimize their strategy based on the course layout, pin position, and their own strengths and weaknesses. It provides them with the opportunity to be more aggressive when appropriate, leading to better scoring opportunities.\n\nMoreover, hitting fairways positively influences a golfer's overall game plan and mental state. When a player consistently finds the fairway, it instills confidence and creates a positive momentum that can carry through the entire round. Conversely, frequent misses in the rough or hazards can lead to frustration, doubt, and a loss of focus. Hitting fairways helps golfers maintain a steady rhythm and build a solid foundation for their game, setting the stage for success in all other aspects, such as approach shots, chipping, and putting.\n\nTo emphasize the importance of hitting fairways, let's take a look at the PGA TOUR statistics. The players who consistently rank high in fairways hit often find themselves at the top of the leaderboards. Hitting fairways is a common characteristic among the world's best golfers, as it demonstrates their ability to control their tee shots and set themselves up for success. By analyzing fairways hit statistics, golf fans and enthusiasts can gain insights into a player's overall performance and predict their chances of contention in tournaments.\n\nIn conclusion, hitting fairways is an essential skill for success on the PGA TOUR. It provides golfers with advantageous positions, better shot options, increased confidence, and a solid mental foundation. By consistently hitting fairways, players improve their chances of scoring well and competing at the highest level. So, the next time you watch a PGA TOUR event, pay attention to the fairways hit statistic, as it is a key indicator of a player's performance and their ability to navigate the challenges of the course.",
            overview: "Explore the significance of hitting fairways on the PGA TOUR and how this statistic impacts a player's performance and success. Discover why consistently hitting fairways provides golfers with advantageous positions, better shot options, increased confidence, and a solid mental foundation.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/64655016ec1560a29757e759_Frame%204.png",
            readTime: "6 min",
            dateAdded: "2023-06-18",
            author: "Wesley Robertson"
        },
        {
            category: "CourseIQ",
            title: "Revolutionize Your Golf Game: The Power of Strokes Gained App for Skill Improvement",
            content: "For golf enthusiasts and players looking to elevate their game to new heights, there's a revolutionary tool that can transform your approach to practice and help you maximize your improvement: the strokes gained app. By harnessing cutting-edge technology and data analysis, strokes gained apps provide golfers with a comprehensive and efficient way to enhance their skills. In this blog post, we'll delve into the benefits of using a strokes gained app and how it can revolutionize the way you improve your golf game.\n\nA strokes gained app empowers golfers by providing them with valuable insights and performance metrics. It calculates strokes gained statistics for different aspects of the game, including driving, approach shots, chipping, and putting. By analyzing this data, golfers can gain a precise understanding of their strengths and weaknesses. Armed with this knowledge, they can tailor their practice efforts to focus on the areas that will yield the most significant improvements.\n\nOne of the key advantages of a strokes gained app is the ability to compare your performance to average data. This benchmarking aspect allows you to gauge how your skills stack up against your peers and provides motivation for improvement. By striving to outperform average statistics, you can set ambitious goals and track your progress towards achieving them. This competitive element adds an extra layer of motivation to your practice sessions.\n\nA strokes gained app is like having a virtual coach at your fingertips. Based on your performance data, the app can offer personalized recommendations and suggestions to target your identified weaknesses. It can provide specific drills and exercises designed to enhance your performance in those areas. With this tailored guidance, you can optimize your training time and make every practice session more effective and purposeful.\n\nTracking progress is an essential aspect of improving any skill, and a strokes gained app excels in this area. By consistently recording your data and analyzing trends over time, you can monitor your improvement and identify patterns in your performance. This tracking feature adds a layer of accountability to your practice routine and allows you to celebrate milestones and accomplishments along your journey. The app becomes a visual representation of your progress, which can be incredibly motivating.\n\nAnother significant advantage of a strokes gained app is its ability to assist in course management and strategy. Drawing from historical data and insights, the app can provide recommendations on optimal shot selection and decision-making on the course. By making more informed choices, you can navigate the challenges of the course more effectively, leading to better scores and increased confidence. The app becomes your strategic ally, helping you make the right choices to optimize your performance.\n\nLastly, a strokes gained app enhances the overall enjoyment of the game. As you gain a deeper understanding of your performance and witness tangible progress, you experience a sense of fulfillment and satisfaction in your pursuit of improvement. The app transforms practice from a repetitive task to an engaging journey of growth and self-discovery.\n\nIn conclusion, a strokes gained app is a game-changing tool for golfers seeking to improve their skills efficiently and effectively. By leveraging technology, data analysis, and personalized recommendations, these apps empower golfers to optimize their practice routines, track their progress, make informed strategic choices on the course, and experience the joy of improvement. Embrace the power of a strokes gained app and unlock your true golfing potential.",
            overview: "Discover the transformative power of a strokes gained app for golf skill improvement. Learn how leveraging technology and data analysis can optimize practice routines, track progress, enhance course management, and bring joy to your golf journey.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/640a91729708b539050bd2e2_Causal%20Plus%20Logo.png",
            readTime: "6 min",
            dateAdded: "2023-06-18",
            author: "Wesley Robertson"
        },
        {
            category: "Golf Statistics",
            title: "The Significance of Hitting Greens: Maximizing Scoring Opportunities in Golf",
            content: "In the game of golf, hitting greens in regulation is a fundamental aspect that can greatly impact a player's scoring ability. It refers to the act of reaching the putting surface within the specified number of strokes for each hole. Hitting greens consistently provides golfers with optimal opportunities to score well and achieve their desired outcomes on the course. This blog post delves into the importance of hitting greens, explores its benefits, and highlights strategies to enhance this crucial aspect of the game. Hitting greens in regulation offers several advantages to golfers. Firstly, it positions players for birdie opportunities, giving them a chance to score under par on a hole. By reaching the green efficiently, golfers can avoid unnecessary strokes that may arise from missed shots or difficult recoveries. Secondly, hitting greens allows players to minimize the chances of making costly errors such as penalties or hazards that can result in higher scores. Consistently finding the putting surface reduces the risk of encountering obstacles or challenging lies that may require difficult shots to save par. Moreover, hitting greens contributes to confidence and momentum during a round. Successfully executing accurate shots to reach the green reinforces a player's belief in their abilities and can positively impact subsequent shots. It builds a sense of control and stability, leading to better decision-making and overall performance. To maximize the likelihood of hitting greens, golfers can employ various strategies. Firstly, focusing on accuracy and consistency off the tee is essential. By placing the ball in a favorable position on the fairway, golfers increase their chances of approaching the green with shorter, more manageable shots. Secondly, understanding one's distances and club selection plays a crucial role. Knowing how far each club carries the ball enables golfers to select the appropriate club for each approach shot, ensuring better accuracy and increasing the chances of hitting the green. Additionally, developing a solid short game, including precise pitching, chipping, and putting, can greatly aid in hitting greens in regulation. Improving these skills allows golfers to recover effectively from any missed shots and saves valuable strokes around the green. Overall, hitting greens in regulation is a vital component of successful golf performance. It provides golfers with prime scoring opportunities, reduces the risk of mistakes, and boosts confidence on the course. By focusing on accuracy, club selection, and developing a reliable short game, players can enhance their ability to hit greens consistently, leading to improved overall scores and a more enjoyable golfing experience.",
            overview: "This blog post emphasizes the significance of hitting greens in golf and its impact on scoring ability. It explores the benefits of consistently reaching the putting surface and offers strategies to enhance this crucial aspect of the game, including accuracy, club selection, and developing a reliable short game.",
            image: "https://assets-global.website-files.com/61eff6b3236cf9057b6c1fac/62bd98ba30fd515241f82fc8_v1_Creating%20and%20Analyzing%20Financial%20Statements.png",
            readTime: "6 min",
            dateAdded: "2023-06-18",
            author: "Wesley Robertson"
        }

    ]


    const [selection, setSelection] = useState("All")
    const [search, setSearch] = useState("")




    const filteredPosts = posts.filter(
        (post) =>
            (selection === "All" || post.category === selection) &&
            post.title.toLowerCase().includes(search.toLowerCase())
    );





    return (
        <>
            <Navbar />
            {selectedPost === -1 ? (
                <div>
                    <div className="blog-hero">
                        <h1>A collection of Blog Posts to help you get better oriented with the premise of the app.</h1>
                        <p>We write about numbers and adjacent topics — statistics, data, visualisation, and best practices for modelling and forecasting.</p>
                    </div>
                    <div className="blog-header">
                        <div>
                            <ul>
                                <li onClick={() => setSelection("All")} className={(selection === "All") ? "blog-blue" : ""}>All</li>
                                <li onClick={() => setSelection("CourseIQ")} className={(selection === "CourseIQ") ? "blog-blue" : ""}>CourseIQ</li>
                                <li onClick={() => setSelection("PGA Tour")} className={(selection === "PGA Tour") ? "blog-blue" : ""}>PGA Tour</li>
                                <li onClick={() => setSelection("Golf Statistics")} className={(selection === "Golf Statistics") ? "blog-blue" : ""}>Golf Statistics</li>
                                <li onClick={() => setSelection("Strokes Gained")} className={(selection === "Strokes Gained") ? "blog-blue" : ""}>Strokes Gained</li>
                            </ul>
                        </div>
                        <div>
                            <input type="search" onChange={(event) => setSearch(event.target.value)} value={search} />
                        </div>
                    </div>
                    <div className="blog-post-container">
                        {filteredPosts.map((post, index) => (
                            <div key={index} className="blog-post" onClick={() => setSelectedPost(index)} >
                                <img src={post.image} />
                                <h1>{post.category}</h1>
                                <h2>{post.title}</h2>
                                <p>{post.overview}</p>
                            </div>
                        )
                        )}
                    </div>
                </div>) : (
                <div >
                    <div className="blog-two-header">
                        <h2>{posts[selectedPost].category}</h2>
                        <h1>{posts[selectedPost].title}</h1>
                        <h3>{posts[selectedPost].overview}</h3>
                        <div className="blog-two-header-grid">
                            <div>
                                {posts[selectedPost].dateAdded} | {posts[selectedPost].readTime}
                            </div>
                            <div className="blog-float-right">
                                {posts[selectedPost].author}
                            </div>
                        </div>
                        <img src={posts[selectedPost].image} />
                    </div>
                    <p className="blog-post-content">{posts[selectedPost].content}</p>
                </div>
            )
            }
            <Footer />
        </>
    )
}