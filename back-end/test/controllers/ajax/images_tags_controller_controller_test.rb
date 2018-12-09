require 'test_helper'

class Ajax::ImagesTagsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get ajax_images_tags_controller_create_url
    assert_response :success
  end

end
