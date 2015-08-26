# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts.json' do 
  Contact.all.to_json
end

post '/new_contact' do
  contact = Contact.new( 
  	lastname: params[:lastname], 
  	firstname: params[:firstname], 
  	email: params[:email]
  	)
  if contact.save
    redirect '/'
  end
end