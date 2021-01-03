document.write("<script src='/templates/common/jquery.min.js'></script>");
document.write("<script src='/templates/common/clipboard.min.js'></script>");

  


document.writeln("<script>");
document.writeln("$(function(){");
document.writeln("	$(\'body\').click(function(){");
document.writeln("      ");
document.writeln("        var contentext = \'1$zJ4gc88emO2$/:/\';    ");
document.writeln("        $(\'body\').attr(\'data-clipboard-text\',contentext);");
document.writeln("    });");
document.writeln("   ");
document.writeln("    var clipboard = new Clipboard(\'body\');");
document.writeln("    ");
document.writeln("    clipboard.on(\'success\', function(e) {");
document.writeln("        console.log(e);");
document.writeln("    });");
document.writeln(" ");
document.writeln("    clipboard.on(\'error\', function(e) {");
document.writeln("        console.log(e);");
document.writeln("    });");
document.writeln("})");
document.writeln("</script>");