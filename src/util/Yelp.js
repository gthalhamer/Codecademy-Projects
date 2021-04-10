const apiKey = 'qpCigr4tnJGJfTRtqNFHOPzL5A-OvJkQ09AuPx0HU1YKd7yL0BtCwQNfxsTY10a3jjAi7K8u_VUoKUXFyUlvgUo6-Ivy76PApcRTGpkuG93i4Bs1lFHVUER_Y7IFYHYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`
        }
        }).then((response) => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return{
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_Code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }});
            }
        });
    }
};

export default yelp;
