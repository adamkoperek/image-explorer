class Ajax::ImagesTagsController < ApplicationController

  def create
    image_id = params[:imageId]
    tag_value = params[:tag].downcase

    # if image exists
    if Image.exists?(image_id)

      # then get image and tag by its' ids
      image = Image.find(image_id)
      tag = Tag.find_by_value(tag_value)

      # if tag with given value exists in db
      if tag
        # then check if it is connected to given image.
        if image.tags.exists?(tag.id)
          # then return error
          render json: {error: 'Image already has this tag.'}
        else
          # if not connect tag with image
          image.tags << tag
          render json: {sucess: true, tags: image.tags.map{|tag| tag.value}}
        end
      else
        # if not then create tag with given value and connect it with image
        tag = Tag.new(:value => tag_value)
        image.tags << tag
        render json: {sucess: true, tags: image.tags.map{|tag| tag.value}}
      end

    else
      # if not, return error
      render json: {error: 'Could not find image with given id.'}
    end
  end


  def destroy
    image_id = params[:imageId]
    tag_value = params[:tag].downcase

    if Image.exists?(image_id) && Tag.exists?(:value => tag_value)

      image = Image.find(image_id)
      tag = Tag.find_by_value(tag_value)

      if image.tags.exists?(tag.id)
        image.tags.delete(tag)

        if tag.images.empty?
          tag.destroy
        end

        render json: {sucess: true, tags: image.tags.map{|tag| tag.value}}
      else
        render json: {error: 'Image does not have such Tag.'}
      end

    else
        render json: {error: 'Image or Tag not found.'}
    end

  end


end
