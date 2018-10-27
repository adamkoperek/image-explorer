module Ajax::ImagesHelper

  def image_full_path(image)
    image.directory.full_path.gsub!('/', '\\') + '\\' + image.file_name
  end

end
