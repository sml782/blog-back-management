<script type="text/javascript">
	$(function() {
        var editor = editormd("editormd", {
            path			: "/public/lib/",
            // Autoload modules mode, codemirror, marked... dependents libs path
            width			: "90%",
            // autoHeight  	: true, 
            tex             : true,
            emoji           : true,
            taskList        : true,
            flowChart       : true,
            appendMarkdown  : '',
            saveHTMLToTextarea : true
        });

        $('#submit').click(function submit() {
        	const mdCon = editor.getMarkdown();
        	// console.log(mdCon)
        	$.ajax({
        		method: "POST",
  				url: "/test",
  				headers: {
	 				'x-csrf-token': $.cookie('csrfToken')
  				},
  				data: {
  					mdCon
  				},
  				success: (data) => {
  					alert(data.msg)
  				}
        	})
        })

        /*
        // or
        var editor = editormd({
            id   : "editormd",
            path : "../lib/"
        });
        */

        //testEditor.getMarkdown();       // 获取 Markdown 源码
        //testEditor.getHTML();           // 获取 Textarea 保存的 HTML 源码
        //testEditor.getPreviewedHTML();  // 获取预览窗口里的 HTML，在开启 watch 且没有开启 saveHTMLToTextarea 时使用
    });
</script>