require 'test_helper'

class Ajax::ScopeSelectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get ajax_scope_selections_index_url
    assert_response :success
  end

  test "should get destroy" do
    get ajax_scope_selections_destroy_url
    assert_response :success
  end

  test "should get create" do
    get ajax_scope_selections_create_url
    assert_response :success
  end

end
