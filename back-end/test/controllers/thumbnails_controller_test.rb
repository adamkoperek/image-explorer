require 'test_helper'

class ThumbnailsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get thumbnails_show_url
    assert_response :success
  end

end
