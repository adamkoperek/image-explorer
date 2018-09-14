require 'test_helper'

class Ajax::ScopesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ajax_scopes_index_url
    assert_response :success
  end

  test "should get create" do
    get ajax_scopes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get ajax_scopes_destroy_url
    assert_response :success
  end

end
