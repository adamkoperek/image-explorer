class Ajax::ImagesTagsController < ApplicationController
  def create
    image_id = params[:imageId]
    tag_value = params[:tag]

    render json: {success: true}
  end
end
