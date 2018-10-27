class ThumbnailsController < ApplicationController

  skip_before_action :authenticate

  def show
    image = Image.find(params[:id])

    unless image
      render_image_not_found()
    end

    # use imagemagick to create thumbnail:
    # <image_magick_path>\convert <source_path> -thumbail 'widthxheight' <result_path>
    convert = Rails.configuration.image_magick_path + 'convert'
    source_path = helpers.image_full_path(image)
    result_path = "images\\thumbnails\\tn_#{params[:id]}.jpg"
    command_content = convert + ' "' + source_path + '" -thumbnail 200x200 "' + result_path + '"'
    system command_content

    send_file "images/thumbnails/tn_#{params[:id]}.jpg", type: 'image/jpg', disposition: 'inline'
  end

  private

    def render_image_not_found
      send_file "images/thumbnails/1.jpg", type: 'image/png', disposition: 'inline'
    end

end
