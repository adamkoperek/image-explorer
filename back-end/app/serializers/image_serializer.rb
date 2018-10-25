class ImageSerializer < ActiveModel::Serializer
  attributes :id, :file_name, :full_path, :size, :title
end
