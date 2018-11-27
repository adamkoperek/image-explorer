class ImagesController < ApplicationController

  skip_before_action :authenticate
  
  def show
    image = Image.find(params[:id])

    unless image
      render_image_not_found()
    end

    send_file helpers.image_full_path(image), type: 'image/jpg', disposition: 'inline'
  end

  private

    def render_image_not_found
      send_file "images/thumbnails/1.jpg", type: 'image/png', disposition: 'inline'
    end
end
