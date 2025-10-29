
import React from 'react';
import { Link } from 'react-router-dom';

export const NewsSection: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "New Advanced Cardiac Care Unit Opens",
      excerpt: "We are excited to announce the opening of our new state-of-the-art cardiac care unit with the latest medical technology and equipment.",
      image: "https://readdy.ai/api/search-image?query=Modern%20cardiac%20care%20unit%20with%20advanced%20medical%20equipment%2C%20hospital%20interior%20with%20cardiac%20monitors%20and%20medical%20devices%2C%20clean%20medical%20facility%2C%20healthcare%20technology%2C%20professional%20medical%20environment&width=600&height=400&seq=news1&orientation=landscape",
      date: "March 15, 2024",
      category: "Facility Update",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Free Health Screening Camp This Weekend",
      excerpt: "Join us for a comprehensive health screening camp offering free checkups, blood tests, and consultations with our expert doctors.",
      image: "https://readdy.ai/api/search-image?query=Health%20screening%20camp%20with%20doctors%20examining%20patients%2C%20medical%20checkup%20event%2C%20community%20healthcare%20service%2C%20free%20medical%20consultation%2C%20healthcare%20outreach%20program&width=600&height=400&seq=news2&orientation=landscape",
      date: "March 12, 2024",
      category: "Community Health",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Telemedicine Services Now Available",
      excerpt: "Access quality healthcare from the comfort of your home with our new telemedicine platform. Consult with doctors online 24/7.",
      image: "https://readdy.ai/api/search-image?query=Telemedicine%20consultation%20with%20doctor%20on%20computer%20screen%2C%20online%20medical%20consultation%2C%20digital%20healthcare%20service%2C%20remote%20medical%20care%2C%20modern%20telehealth%20technology&width=600&height=400&seq=news3&orientation=landscape",
      date: "March 10, 2024",
      category: "Digital Health",
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h4 className="text-lg font-medium text-blue-600 mb-4">Latest Updates</h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Healthcare News & Updates
          </h2>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            Stay informed about the latest developments in our healthcare services, new facilities, and community health initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-blue-500 mb-3">
                  <span className="flex items-center">
                    <i className="fas fa-calendar mr-2"></i>
                    {article.date}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-2"></i>
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-blue-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            View All News
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
